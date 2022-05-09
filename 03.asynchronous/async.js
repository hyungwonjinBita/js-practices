const LINK = "https://bootcamp.fjord.jp/";

const HTMLFunc = async (url) => {
  const response = await (await fetch(url)).text();
  console.log(response);
};

HTMLFunc(LINK);
