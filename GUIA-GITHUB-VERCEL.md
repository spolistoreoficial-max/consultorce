# 🚀 Guia Completo: GitHub + Vercel

## 📋 **O que vamos fazer:**
1. Baixar o código do Bolt
2. Criar repositório no GitHub
3. Conectar Vercel ao GitHub
4. Fazer atualizações automáticas

---

## 🔽 **PASSO 1: Baixar o código do Bolt**

### **No Bolt (aqui mesmo):**
1. **Clique no ícone de pasta** (canto superior esquerdo)
2. **Clique em "Download"** ou use `Ctrl+A` para selecionar tudo
3. **Salve em uma pasta** no seu computador (ex: `orion-landing`)

### **Estrutura que você deve ter:**
```
orion-landing/
├── src/
├── public/
├── package.json
├── index.html
├── README.md
└── outros arquivos...
```

---

## 🐙 **PASSO 2: Criar repositório no GitHub**

### **2.1 - Acessar GitHub:**
1. Vá em [github.com](https://github.com)
2. **Faça login** na sua conta
3. **Clique no "+" verde** (canto superior direito)
4. **Selecione "New repository"**

### **2.2 - Configurar repositório:**
```
Repository name: orion-landing-page
Description: Landing page do Orion - Consultor de IA
✅ Public (ou Private se preferir)
❌ NÃO marque "Add a README file"
❌ NÃO marque "Add .gitignore"
❌ NÃO marque "Choose a license"
```

### **2.3 - Criar:**
1. **Clique em "Create repository"**
2. **Copie a URL** que aparece (algo como: `https://github.com/seuusuario/orion-landing-page.git`)

---

## 💻 **PASSO 3: Subir código para GitHub**

### **3.1 - Instalar Git (se não tiver):**
- **Windows**: Baixe em [git-scm.com](https://git-scm.com)
- **Mac**: `brew install git` ou baixe do site
- **Linux**: `sudo apt install git`

### **3.2 - Abrir terminal/prompt:**
- **Windows**: `Win + R` → digite `cmd` → Enter
- **Mac**: `Cmd + Space` → digite `terminal` → Enter
- **Linux**: `Ctrl + Alt + T`

### **3.3 - Navegar até a pasta:**
```bash
# Substitua pelo caminho da sua pasta
cd C:\Users\SeuNome\Desktop\orion-landing
```

### **3.4 - Comandos Git:**
```bash
# 1. Inicializar Git
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer primeiro commit
git commit -m "Primeira versão da landing page"

# 4. Conectar ao GitHub (substitua pela SUA URL)
git remote add origin https://github.com/SEUUSUARIO/orion-landing-page.git

# 5. Enviar para GitHub
git push -u origin main
```

### **✅ Sucesso se:**
- Não aparecer erros vermelhos
- No GitHub aparecer todos os arquivos

---

## 🔗 **PASSO 4: Conectar Vercel ao GitHub**

### **4.1 - Acessar Vercel:**
1. Vá em [vercel.com](https://vercel.com)
2. **Faça login** (pode usar conta do GitHub)
3. **Clique em "New Project"**

### **4.2 - Importar do GitHub:**
1. **Procure seu repositório** `orion-landing-page`
2. **Clique em "Import"**

### **4.3 - Configurar build:**
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### **4.4 - Deploy:**
1. **Clique em "Deploy"**
2. **Aguarde** (1-3 minutos)
3. **Copie a URL** que aparece

### **4.5 - Configurar domínio personalizado:**
1. **Vá em "Settings"** → **"Domains"**
2. **Adicione seu domínio**
3. **Configure DNS** conforme instruções

---

## 🔄 **PASSO 5: Como fazer atualizações**

### **Método 1: Pelo site do GitHub (mais fácil)**
1. **Acesse seu repositório** no GitHub
2. **Clique no arquivo** que quer editar
3. **Clique no ícone de lápis** (Edit)
4. **Faça as alterações**
5. **Scroll para baixo** → **"Commit changes"**
6. **Escreva uma descrição** (ex: "Atualizar preços")
7. **Clique em "Commit changes"**

### **Método 2: Baixar do Bolt e subir**
1. **Faça alterações aqui no Bolt**
2. **Baixe os arquivos atualizados**
3. **Substitua na pasta local**
4. **No terminal:**
```bash
git add .
git commit -m "Descrição da alteração"
git push
```

### **✅ Resultado:**
- **Vercel detecta automaticamente** a mudança
- **Faz deploy automático** (1-2 minutos)
- **Seu site é atualizado** automaticamente

---

## 🎯 **RESUMO DO FLUXO:**

```
Bolt → GitHub → Vercel → Seu Domínio
  ↓        ↓        ↓         ↓
Código → Versão → Deploy → Site Atualizado
```

### **Para atualizações futuras:**
1. **Altere no Bolt** ou **direto no GitHub**
2. **Faça commit** das mudanças
3. **Vercel atualiza automaticamente**
4. **Seu site fica atualizado**

---

## 🆘 **Problemas comuns:**

### **"Git não é reconhecido":**
- Instale o Git e reinicie o terminal

### **"Permission denied":**
- Configure suas credenciais do GitHub

### **"Build failed":**
- Verifique se todos os arquivos foram enviados
- Confira as configurações de build no Vercel

### **"Domain not working":**
- Aguarde propagação DNS (até 24h)
- Verifique configurações de DNS

---

## 📞 **Precisa de ajuda?**
- **GitHub**: [docs.github.com](https://docs.github.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Git**: [git-scm.com/docs](https://git-scm.com/docs)

---

**🎉 Pronto! Agora você tem deploy automático funcionando!**