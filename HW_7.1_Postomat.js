let balance = 100;
const smsCode = `A001DFX0`;
const packageCell = 4;

const postomat = [null, null, null, `4 - ваша посылка`, null];

function getPackage(code, cell) {
  if (code == `A001DFX0` && postomat[cell - 1] != null) {
    balance = balance - 100;
    postomat[cell - 1] = null;

    console.log(
      `Вы получили посылку из ячейки ${cell} и ваш счет составляет: ${balance}р.`
    );
  }
}

getPackage(smsCode, packageCell);
