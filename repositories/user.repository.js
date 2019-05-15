const saveData = (data) => {
  // код по сохранению данных в БД
  if (data) {
    console.log(`${data} is saved`);
    return true;
  } else {
    return false;
  }
}

module.exports = {
  saveData
};