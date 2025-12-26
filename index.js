const TelegramBot = require('node-telegram-bot-api');
const express = require('express');  // 新增：用于 Render 保持在线

// 你的 Bot Token
const token = '8535761398:AAFcB4WjLGxmF9lg60B2v5Il_rfGVzzn_O4';
const bot = new TelegramBot(token, { polling: true });

// Express 服务器：Render 需要一个监听端口的 Web 服务
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('狼人杀机器人在线！🐺 当前时间：' + new Date().toLocaleString());
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');  // UptimeRobot 会访问这个路径
});

app.listen(PORT, () => {
  console.log(`健康检查服务器运行在端口 ${PORT}`);
});

// ======== 下面是你原来的所有游戏逻辑（保持不变）========

let players = {};
let roles = [];
let gameStarted = false;
let alive = new Set();

const roleList10 = ['狼人', '狼人', '白狼王', '预言家', '女巫', '猎人', '守卫', '村民', '村民', '村民'];

// /start, /join, /startgame, /roles, /reset 等所有 bot.onText(...) 代码
// （直接复制你之前最后成功的版本里的游戏部分贴在这里）

// 例如：
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '🌓 狼人杀机器人（10人现代板）上线！\n\n' +
    '板子：2狼 + 白狼王 + 预言家 + 女巫 + 猎人 + 守卫 + 3村民\n' +
    '🐺狼队强悍，白狼王可自爆带人，神职策略深！\n\n' +
    '命令：/join 加入 | /startgame 开始(≥8人) | /roles 查看板子 | /reset 重置');
});

// ... 把你之前所有 bot.onText 的代码都贴在这里（包括 /join /startgame /roles /reset）

console.log('10人狼人杀机器人启动！(支持 Render 部署)');