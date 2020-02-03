curl --include --request POST https://tic-tac-toe-wdi-multiplayer.herokuapp.com/games \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{}'
echo
