import { execSync } from "node:child_process";

const branch = execSync("git rev-parse --abbrev-ref HEAD", {
	encoding: "utf8",
}).trim();

if (branch !== "master") {
	process.exit(0);
}

// 標準入力から確認を取得
const input = prompt(
	"\x1b[33m⚠ masterブランチに直接pushしようとしています。続行しますか？ (y/N)\x1b[0m",
);

if (input?.trim().toLowerCase() === "y") {
	process.exit(0);
} else {
	console.error("\x1b[31mPushを中断しました。\x1b[0m");
	process.exit(1);
}
