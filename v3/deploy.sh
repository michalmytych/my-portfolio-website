#!/bin/bash/

# Sets up colors of text
setup_color() {
	if [ -t 1 ]; then
		RED=$(printf '\033[31m')
		GREEN=$(printf '\033[32m')
		YELLOW=$(printf '\033[33m')
		BLUE=$(printf '\033[34m')
		RESET=$(printf '\033[m')
	else
		RED=""
		GREEN=""
		YELLOW=""
		BLUE=""
		RESET=""
	fi
}

setup_color

cd ..
HOST="19_mytych@wierzba.wzks.uj.edu.pl"
REMOTE_TARGET_DIR="~/public_html/portfolio"
BUILD_DIR="./stronka-portfolio"

echo "$BLUE > INFO < Deploing on remote host $RESET $GREEN $HOST $RESET * $RESET"
sleep 0.2 && clear && echo "$BLUE > INFO < Deploing on remote host$RESET$GREEN $HOST $RESET * * $RESET"
sleep 0.2 && clear && echo "$BLUE > INFO < Deploing on remote host$RESET$GREEN $HOST $RESET * * *$RESET"
sleep 0.2 && clear && echo "$BLUE > INFO < Deploing on remote host$RESET$GREEN $HOST $RESET * * * *$RESET"
sleep 0.2 && clear && echo "$BLUE > INFO < Deploing on remote host$RESET$GREEN $HOST $RESET * * * * *$RESET"
sleep 0.2 && clear && echo "$BLUE > INFO < Deploing on remote host$RESET$GREEN $HOST $RESET * * * * * *$RESET"
sleep 0.2 && clear && echo "$BLUE > INFO < Deploing on remote host$RESET$GREEN $HOST $RESET * * * * * * *$RESET"
sleep 0.2 && clear && echo "$BLUE > INFO <$RESET$GREEN 19_mytych$RESET user password required $RESET"

scp -r $HOST:$REMOTE_TARGET_DIR $BUILD_DIR

if [ $? -eq 0 ]; then
        echo "$GREEN > SUCCESS < Deploing succeded $RESET"
    else
        echo "$RED > ERROR < Deploy failed $RESET"
fi