const createSecretHolder = (secret) => {
    return {
        getSecret() {return console.log(secret)},
        setSecret(value) {secret = value},
    }
}

const obj = createSecretHolder(15);
obj.getSecret(); //15
obj.setSecret(27);
obj.getSecret(); //27
