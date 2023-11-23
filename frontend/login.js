const form = document.querySelector("#login-form");

// let accessToken = null;

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  accessToken = data.accessToken;
  window.localStorage.setItem("token", accessToken);
  alert("로그인 되었습니다");

  window.location.pathname("/");

  // const infoDiv = document.querySelector("#info");
  // infoDiv.innerText = "로그인 되었습니다";

  // window.location.pathname("/");

  // const btn = document.createElement("button");
  // btn.innerText = "상품가져오기";
  // btn.addEventListener("click", async () => {
  //   const res = await fetch("/items", {
  //     headers: {
  //       Authoriztion: `Bearer ${accessToken}`,
  //     },
  //   });
  //   const data = await res.json();
  // });
  // infoDiv.appendChild(btn);
};
if (res.status === "200") {
  alert("로그인에 성공했습니다");
  window.location.pathname = "/";
  console.log(res.status);
} else if (res.status === 401) {
  alert("id 혹은 password가 존재하지 않습니다");
}

form.addEventListener("submit", handleSubmit);
