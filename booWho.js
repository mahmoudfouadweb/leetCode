// done
function booWho(bool) {
  let result = bool;
  if (typeof bool == "boolean") result = true;
  else result = false;
  return result;
}

booWho(null);
