const readline = require('readline');

class Console {
  run() {
    console.log("Bem vindos ao ultimo teste da Target, Reverse String")

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question("Digite uma palavra para inverter: ", (word) => {
      const formatedWord = word.trim()

      if (formatedWord === "") {
        console.log("Palavra inválida! Por favor, digite uma palavra com caracteres.");
        return rl.close();
      }

      let reverse = ""

      for(let i = formatedWord.length - 1; i >= 0; i--) {
        reverse += word[i]
      }
      console.log(`O inverso de ${formatedWord} é: ${reverse}`)
      rl.close()
    });
  }
}

const main = new Console()
main.run()