// AI Banner Chat Module
// Optimized for performance - loaded as module with defer

export function initChatApp(guidelines) {
  // State management
  let apiKey = '';
  let conversationHistory = [];
  let bannerDetails = {};
  
  // Elements
  const apiSetup = document.getElementById('api-setup');
  const apiKeyInput = document.getElementById('api-key-input');
  const saveApiKeyBtn = document.getElementById('save-api-key');
  const chatMessages = document.getElementById('chat-messages');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');
  const resetBtn = document.getElementById('reset-chat');
  const statusIndicator = document.getElementById('status-indicator');

  // Toast function
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-emerald-500' : type === 'error' ? 'bg-rose-500' : 'bg-blue-500';
    
    toast.className = `${bgColor} text-white px-5 py-3 rounded-xl shadow-lg text-sm font-semibold pointer-events-auto animate-slide-in max-w-md`;
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Save API Key
  saveApiKeyBtn.addEventListener('click', () => {
    const key = apiKeyInput.value.trim();
    if (!key) {
      showToast('Masukkan API key terlebih dahulu', 'error');
      return;
    }
    if (!key.startsWith('sk-')) {
      showToast('API key tidak valid (harus dimulai dengan sk-)', 'error');
      return;
    }
    
    apiKey = key;
    apiSetup.style.display = 'none';
    showToast('API key berhasil disimpan', 'success');
  });

  // Auto-resize textarea
  userInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
  });

  // Send message on Enter (Shift+Enter for new line)
  userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  sendBtn.addEventListener('click', sendMessage);
  resetBtn.addEventListener('click', resetChat);

  // Add message to chat
  function addMessage(content, isUser = false, isJson = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex gap-3 animate-fade-in';
    
    if (isUser) {
      messageDiv.classList.add('justify-end');
      messageDiv.innerHTML = `
        <div class="max-w-[80%]">
          <div class="bg-primary text-white rounded-2xl rounded-tr-sm p-4 shadow-sm">
            <p class="text-sm leading-relaxed whitespace-pre-wrap">${escapeHtml(content)}</p>
          </div>
          <p class="text-xs text-slate-400 mt-1 text-right">Baru saja</p>
        </div>
        <div class="flex-shrink-0 w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-slate-600 font-bold text-sm">
          👤
        </div>
      `;
    } else {
      if (isJson) {
        // JSON output with copy button
        messageDiv.innerHTML = `
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            AI
          </div>
          <div class="flex-1 max-w-[85%]">
            <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl rounded-tl-sm border border-emerald-200 p-4 shadow-sm">
              <p class="text-sm font-semibold text-emerald-900 mb-3 flex items-center gap-2">
                ✅ Prompt JSON Siap!
              </p>
              <div class="relative">
                <pre class="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs overflow-x-auto font-mono max-h-96 overflow-y-auto">${escapeHtml(content)}</pre>
                <button 
                  class="copy-btn absolute top-2 right-2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-md transition-all cursor-pointer"
                  data-content="${escapeHtml(content).replace(/"/g, '&quot;')}"
                >
                  📋 Copy
                </button>
              </div>
              <p class="text-xs text-emerald-700 mt-3">
                Paste JSON ini ke DALL-E 3 prompt. Semua guidelines Zaloma sudah included.
              </p>
            </div>
            <p class="text-xs text-slate-400 mt-1">Baru saja</p>
          </div>
        `;
        
        // Attach copy handler
        const copyBtn = messageDiv.querySelector('.copy-btn');
        copyBtn.addEventListener('click', () => copyToClipboard(copyBtn));
      } else {
        // Regular AI message
        messageDiv.innerHTML = `
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            AI
          </div>
          <div class="flex-1 max-w-[85%]">
            <div class="bg-white rounded-2xl rounded-tl-sm border border-slate-200 p-4 shadow-sm">
              <p class="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">${formatMessage(content)}</p>
            </div>
            <p class="text-xs text-slate-400 mt-1">Baru saja</p>
          </div>
        `;
      }
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Format message with markdown-like formatting
  function formatMessage(text) {
    return escapeHtml(text)
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  // Escape HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Copy to clipboard
  async function copyToClipboard(button) {
    const content = button.dataset.content.replace(/&quot;/g, '"');
    try {
      await navigator.clipboard.writeText(content);
      button.textContent = '✓ Copied!';
      button.classList.add('bg-emerald-700');
      showToast('Prompt JSON berhasil di-copy!', 'success');
      setTimeout(() => {
        button.textContent = '📋 Copy';
        button.classList.remove('bg-emerald-700');
      }, 2000);
    } catch (err) {
      showToast('Gagal copy, silakan copy manual', 'error');
    }
  }

  // Send message to OpenAI
  async function sendMessage() {
    if (!apiKey) {
      showToast('Simpan API key terlebih dahulu', 'error');
      apiSetup.style.display = 'block';
      return;
    }

    const message = userInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, true);
    userInput.value = '';
    userInput.style.height = 'auto';

    // Update status
    statusIndicator.innerHTML = `
      <svg class="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      AI sedang berpikir...
    `;
    sendBtn.disabled = true;

    // Build conversation context
    conversationHistory.push({
      role: 'user',
      content: message
    });

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `Anda adalah AI Assistant untuk Zaloma Florist yang membantu admin membuat prompt banner sesuai brand guidelines.

TUGAS ANDA:
1. Tanyakan detail banner yang diinginkan secara natural (headline, deskripsi promo, objek utama, ukuran)
2. Jangan tanya semua sekaligus - tanya satu-satu seperti percakapan natural
3. Ketika admin berkata "berikan promptnya" atau "buatkan promptnya", generate JSON prompt lengkap
4. JSON harus mengikuti STRICT guidelines Zaloma

BRAND GUIDELINES ZALOMA:
${guidelines}

ATURAN PERCAKAPAN:
- Ramah dan helpful
- Tanyakan detail secara bertahap
- Pastikan semua info terkumpul sebelum generate prompt
- Info yang perlu: headline, subheadline (optional), deskripsi, objek utama, ukuran banner
- Jika admin minta prompt tapi info belum lengkap, tanyakan yang kurang
- Saat generate prompt, pastikan warna Burgundy #842D43, Cream #FFF8F0, Gold #C99A45
- Pastikan style premium florist, elegant editorial
- Output JSON dalam format yang bisa langsung di-copy

CONTOH OUTPUT JSON:
\`\`\`json
{
  "task": "Create a promotional banner for Zaloma Florist.",
  "brand_identity": {
    "brand_name": "ZALOMA FLORIST",
    "location_line": "FLORIST MALANG"
  },
  "brand_color_system": {
    "primary": "#842D43",
    "background": "#FFF8F0",
    "accent": "#C99A45"
  },
  "campaign_content": {
    "headline": "[DARI USER]",
    "description": "[DARI USER]"
  },
  "visual_subject": {
    "main_subject": "[DARI USER]"
  },
  "canvas": {
    "width": 1792,
    "height": 1024
  }
}
\`\`\`

Jangan jelaskan cara pakai - langsung generate JSON saja saat diminta.`
            },
            ...conversationHistory
          ],
          temperature: 0.7,
          max_tokens: 2000
        })
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error?.error?.message || `API error (${response.status})`);
      }

      const data = await response.json();
      const aiMessage = data.choices[0].message.content;

      // Check if response contains JSON (prompt output)
      const jsonMatch = aiMessage.match(/```json\n([\s\S]*?)\n```/);
      
      if (jsonMatch) {
        // Extract JSON and show as copyable
        const jsonContent = jsonMatch[1].trim();
        addMessage(jsonContent, false, true);
        
        // Also add explanation if any
        const explanation = aiMessage.replace(/```json[\s\S]*?```/, '').trim();
        if (explanation) {
          setTimeout(() => addMessage(explanation, false, false), 500);
        }
      } else {
        // Regular conversation
        addMessage(aiMessage, false, false);
      }

      conversationHistory.push({
        role: 'assistant',
        content: aiMessage
      });

    } catch (error) {
      console.error('Chat error:', error);
      showToast(error.message || 'Gagal berkomunikasi dengan AI', 'error');
      addMessage('Maaf, terjadi kesalahan. Silakan coba lagi.', false, false);
    } finally {
      statusIndicator.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
        Siap
      `;
      sendBtn.disabled = false;
      userInput.focus();
    }
  }

  // Reset chat
  function resetChat() {
    if (!confirm('Reset chat? Semua percakapan akan hilang.')) return;
    
    conversationHistory = [];
    bannerDetails = {};
    
    // Clear chat except welcome message
    const messages = chatMessages.querySelectorAll('.animate-fade-in');
    messages.forEach((msg, idx) => {
      if (idx > 0) msg.remove();
    });
    
    showToast('Chat telah direset', 'success');
  }

  // Inject animations
  if (!document.getElementById('chat-animations')) {
    const style = document.createElement('style');
    style.id = 'chat-animations';
    style.textContent = `
      @keyframes slide-in {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      .animate-slide-in {
        animation: slide-in 0.3s ease-out;
      }
      .animate-fade-in {
        animation: fadeIn 0.3s ease-in;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .scrollbar-thin::-webkit-scrollbar {
        width: 6px;
      }
      .scrollbar-thumb-slate-300::-webkit-scrollbar-thumb {
        background-color: #cbd5e1;
        border-radius: 3px;
      }
      .scrollbar-track-slate-100::-webkit-scrollbar-track {
        background-color: #f1f5f9;
      }
    `;
    document.head.appendChild(style);
  }

  // Focus input on init
  userInput.focus();
}
