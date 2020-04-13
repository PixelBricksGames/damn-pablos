import Roger from "@pabrick/roger";

const rClock = new Roger.Clock(0);

export default rClock;

// const ssPablosHeads = new Roger.RegularSheet("./../../assets/images/common/spritesheet.png", {w:512,h:512}, {w:54,h:90});
// const pabloIdleSprite = new Roger.Sprite("./../../assets/images/common/spritesheet.png", {w:54,h:90}, {x:0,y:0});
// const animPablos_blink1 = new Roger.Animation("blink1",
//                                                 ssPablosHeads,
//                                                 [0,1,2,1,0],
//                                                 { delay: 0, loops: -1, callBack: ()=> {
//                                                         console.log("blink complete!");
//                                                     }
// 												});

// const pabloToon = new Roger.Toon("pablo", pabloIdleSprite);
// pabloToon.addAnimation(animPablos_blink1);
// pabloToon.playAnimation("blink1");
// rClock.addToonToUpdate(pabloToon);
// rClock.setDebugMode(true);
// rClock.start();