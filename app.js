

for (let i = 0; i < 50; i++) {
  console.log(i + 1);

  if( ((i + 1) % 4) == 0 ){
    console.log(`4で割れる数です。${i + 1}`);
  } else if (((i + 1) % 10) ==0){
    console.log(`${i + 1} 回ループしました。`);
  }
  if( (i + 1) === 50 ){
    alert('50回カウントが終わりました。');
  }

}



