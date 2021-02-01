const text = document.querySelector(".container1 p"),
container1 = document.querySelector(".container1");
icon = document.querySelector(".icon");

let tl = gsap.timeline({
  defaults: { duration: 1, ease: "power2.out" },
});

tl.to(text, {
  display: "none",
  color: "red",
})
  .to(container1, {
    width: "50px",
    height: "50px",
    ease: "elastic.out(1, 0.3)",
  })
  .to(container1, {
    borderRadius: "50px",
  })
  .to(container1, {
    borderRadius: "0px",
    width: "100%",
    height: "100%",
    bottom: 0,
  })
  .to(".container1 .menu-list ul li a", {
    opacity: 3,
    pointerEvents: "all",
    stagger: 0.2,
  })
  .to(".container1 .menu-list img", {
    opacity: 3,
    pointerEvents: "all",
    stagger: 0.2,
  })
  .to(".icon", {
    opacity: 0,
    stagger: 0.2,
  })
  .reversed(true);

container1.addEventListener("click", () => {
  tl.reversed(!tl.reversed());

});
