# Time Tracking – A challenge from [Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw)

*This project started on 01/08/2021.*

## Why this project?

I asked a friend to choose one of the Front End Challenges in the Junior level list, he chose this one. A few weeks later, after having studied a bit of object oriented programming in Javascript (OOPJS), I found this project quite a challenge, so this is no longer only a friend's choice, it's mine too.

## What do I expect to do in this project?

1. Learn MarkDown syntax, to avoid using HTML in the README.
2. Learn and practice how to access local external JSON files, consume them and, using OOPJS, show the data on the site.
3. Use JQUERY for the first time.

## What did I learn?

*01/08/2022:*
  1. The Markdown syntax is truly easy to learn and fast to use if compared to HTML, even though I've been using only the basics. Something I do miss though is the SUMMARY tool, but that I can get by using HTML tags.
  2. The first attempt went wrong because I was losing myself in the "class soup", to solve that I abandoned that project, got the final design ([click here to see it](https://github.com/wallysonruan/time-tracking-frontendmentorio.github.io/blob/main/goal.png)) and used the PowerPoint to break it into boxes and, without a line of code, listed the classes names ([Click here to see it.](https://github.com/wallysonruan/time-tracking-frontendmentorio.github.io/blob/main/classes.png)). Even though the last project doesn't really use those classes names, that method surely helped me.
  3. As I'm not used to really use the versioning of GIHUB I created a new HTML file and named it "index-v2.hmtl", then I tried to access the final project throught GITHUB PAGES and the README file was displayed. After researching and trying somethings, I managed to solve the problem. GITHUB PAGES will priorize the index.html file, but if there's no such file it'll use the README file instead.
  4. I finished the mobile version on the second attempt, but when I tried to add the responsiveness to desktop devices using media queries I saw it was a bad code. I had coded all the layout and the it's elements using FLEXBOX and I was having troubles trying to adapt it to desktop devices, so I abbandoned that project. *01/09/2022:*(continuation) The new attempt was made using GRID for the bigger layout (the cards positions) and FLEXBOX for the elements and it's elements (the cards structure and it's children). 

*01/09/2022:*
  1. The front-end of the mobile and desktop versions are ready, except for the hover state of the secondary cards of the statistics cards – I havent figured out which color I should use.
  2. Just finished to add the functionalities. It was quite fun to try and add them because it was the first time I really tried to access an object and get specifics values. Coding this project has taught me the following things about JS objects:
      1. You can use "Object.values(obj)" to get to know what an object has inside.
      2. The use of map iteration, it's a truly magnificient tool, I'll be looking forward to use it again.
      3. You can't store a key inside a variable and use that variable to access a value, for example: `let a = "age" [...] data = array.name.a`
  3. I've used the SWITCH and a lot of ARROW FUNCTIONS, and it feels amazing to understand them more. Arrow function saved me when tying some functions to the buttons, as in:
      1. I created a function that would update the timers everytime it was called (some parameters were required);
      2. I created the buttons and attached the following `event.listener` to them: `button.AddEventListener("click", updateTime("daily", currentTime, pastTime));`;
      3. I thought that would be just fine, but whenever I reloaded the page the button was triggered without have been clicked, instead of creating another function to call the function updateTime, I coded a simple arrow function and that worked. The arrow function: `button.AddEventListener("click", go => updateTime("daily", currentTime, pastTime));`, that seems to mean: the second function is being triggered because you have passed the parameters already, now that you have made it a callback function of the "go" arrow function, which has no parameters, the second will be waiting for the first one to be triggered, which will only occur when the button is clicked.

## What did I set myself to do, but I didn't and why?

*01/09/2022:*
  1. JQUERY. I'll not be using JQUERY on this project for I don't see any reason to do so. CSS and JavaScript are being a nice challenge already.
  2. Local external JSON. I'll have to study and practice the handling of JSON and the use of the Fetch API to do that, and I don't feel like I could do it all by now.

## What is still to implement?

  1. I want to improve the responsiveness to the mobile devices, maybe to all of them, I haven't truly tested it in various devices.
  2. Add the preview of layout, a brief description and a title on/to/in the link, using the Open Graph Protocol – so that when I share the link with friends they will be able to see those informations as they do when we share FACEBOOK, WHATSAPP, INSTAGRAM and many other links (even GITHUB has it on it's links).
  3. Translate this README to pt-BR.
