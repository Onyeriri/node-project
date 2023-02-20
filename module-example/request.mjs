function encrypt(data) {
  return 'encrypted data'
}

export  function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`Sending ${encryptedData} to ${url}`)
}
