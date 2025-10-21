# --------------------------------------------
# 🧱 Base image (lightweight Node.js on Alpine)
# --------------------------------------------
FROM node:18-alpine

# --------------------------------------------
# 📂 Set working directory inside the container
# --------------------------------------------
WORKDIR /app

# --------------------------------------------
# 📦 Copy dependency files first (to leverage caching)
# --------------------------------------------
COPY package*.json ./

# --------------------------------------------
# ⚙️ Install only production dependencies
# --------------------------------------------
RUN npm install --only=production


# --------------------------------------------
# 📄 Copy the remaining application source code
# --------------------------------------------
COPY . .

# --------------------------------------------
# 👤 Create and use a non-root user for security
# --------------------------------------------
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

# --------------------------------------------
# 🌐 Expose the application port
# --------------------------------------------
EXPOSE 3000

# --------------------------------------------
# 🚀 Start the Node.js application
# --------------------------------------------
CMD ["node", "server.js"]
