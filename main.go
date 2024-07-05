package main

import (
	"fmt"
	"os"
	"os/exec"
)

func main() {
	// 定义要运行的命令
	// cmd := exec.Command("sh", "-c", "pwd")
	cmd := exec.Command("bash", "-c", "source ~/.bashrc && bash buildrunjava.sh")

	// 设置标准输入、输出和错误流
	cmd.Stdin = os.Stdin
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	// 启动交互式的 Bash Shell
	err := cmd.Run()
	if err != nil {
		fmt.Println("Error running bash:", err)
		os.Exit(1)
	}
}
