#!/bin/bash

# 获取当前进程的PID
current_pid=$$
befor_pid=`cat pidfile.tmp`

# 函数：递归地杀死所有子进程
killall() {
    FILE="ps.tmp"
    ps > $FILE

    value001=$(awk -v value="$befor_pid" '$2 == value' $FILE)
    echo $value001
    for row in "${value001[@]}"; do
        # 将行拆分成两个字段
        set -- $row
        col1=$1
        if [ "$col1" != "" ]; then
            echo "kill -9 $col1"
            kill -9 $col1
        fi
    done
    echo "before kill -9 $befor_pid"
    kill -9 $befor_pid
}

killall

# 写入pid到文件，后续使用
echo "$current_pid" > pidfile.tmp

node app.mjs


