curl --include --request PATCH https://tic-tac-toe-wdi-multiplayer.herokuapp.com/games/${ID} \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${VAL}"'"
    },
    "over": "'"${OVER}"'"
  }
}'
echo
