const fetch = require('node-fetch')

const quotes = [{"quote":"You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.","author":"John Romero"},{"quote":"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.","author":"Linus Torvalds"},{"quote":"Our job as the game creators or developers - the programmers, artists, and whatnot - is that we have to kind of put ourselves in the user's shoes. We try to see what they're seeing, and then make it, and support what we think they might think.","author":"Shigeru Miyamoto"},{"quote":"The trouble with programmers is that you can never tell what a programmer is doing until it's too late.","author":"Seymour Cray"},{"quote":"The standard library saves programmers from having to reinvent the wheel.","author":"Bjarne Stroustrup"},{"quote":"Programmers are in the enviable position of not only getting to do what they want to, but because the end result is so important they get paid to do it. There are other professions like that, but not that many.","author":"Linus Torvalds"},{"quote":"In the '80s, society created a caricature of what a hacker or a programmer looked like: a guy wearing a hoodie, drinking energy drinks, sitting in a basement somewhere coding. Today, programmers look like the men we see in the show 'Silicon Valley' on HBO. If you look at the message girls are getting, it's saying, 'This is not for you.'","author":"Reshma Saujani"},{"quote":"If programmers deserve to be rewarded for creating innovative programs, by the same token they deserve to be punished if they restrict the use of these programs.","author":"Richard Stallman"},{"quote":"The tastes of country music fans are not limited to the narrow range defined by consultants and programmers and record company moguls.","author":"Charley Pride"},{"quote":"Beyond basic mathematical aptitude, the difference between good programmers and great programmers is verbal ability.","author":"Marissa Mayer"},{"quote":"It is practically impossible to teach good programming to students that have had a prior exposure to BASIC: as potential programmers they are mentally mutilated beyond hope of regeneration.","author":"Edsger Dijkstra"},{"quote":"Few companies that installed computers to reduce the employment of clerks have realized their expectations... They now need more, and more expensive clerks even though they call them 'operators' or 'programmers.'","author":"Peter Drucker"},{"quote":"With the revolution around 1980 of PCs, the spreadsheet programs were tuned for office workers - not to replace office workers, but it respected office workers as being capable of being programmers. So office workers became programmers of spreadsheets. It increased their capabilities.","author":"Rodney Brooks"},{"quote":"The Internet's a driving force in the change from mass media to 'my media,' in which consumers will be their own programmers.","author":"Jerry Yang"},{"quote":"People talk about computer programmers as if computers are our whole lives. That's simply not true.","author":"Ellen Ullman"},{"quote":"Digitisation will rather consolidate the broadcasting industry in India because once the cable is digitized, then naturally all the programmers can showcase their programming.","author":"Subhash Chandra"},{"quote":"Facebook is not a physical country, but with 900 million users, its 'population' comes third after China and India. It may not be able to tax or jail its inhabitants, but its executives, programmers, and engineers do exercise a form of governance over people's online activities and identities.","author":"Rebecca MacKinnon"},{"quote":"I found out that most programmers don't like to test their software as intensely as I do.","author":"Kent Beck"},{"quote":"I end up pleading my case to alternative programmers - you're telling me that my music is too dark for pop, too pop for alternative, and urban radio won't touch it - so we have a record that doesn't fit in. And what is more alternative than that?","author":"Halsey"},{"quote":"Most kids are not dreaming of being programmers, scientists or engineers.","author":"will.i.am"},{"quote":"I love computer programmers. They have a very beautiful definition of complexity as 'the capacity to transmit the maximum information with the minimum data'.","author":"Bjarke Ingels"},{"quote":"I've never been one of those programmers that works effectively on short amounts of sleep. I've always needed eight hours.","author":"John Carmack"},{"quote":"It is a shame that homebrew development can't be officially sanctioned and supported, because it would be a wonderful platform for a modern generation of programmers to be able to get a real feel for low level design work, to be contrasted with the high level web and application work that so many entry level people start with.","author":"John Carmack"},{"quote":"As I've traveled the country, we visit tech incubators all the time where women are going into their second or third act in their career and learning how to be software programmers, or how to work at startup companies, and learning a completely different skill set. I think it's never too late.","author":"Reshma Saujani"},{"quote":"When Usenet was eclipsed by websites in the late 1990s, people from that world - many of them programmers - wanted to bring the freewheeling, amazing discussions of Usenet to the web. And thus, RSS was born.","author":"Annalee Newitz"},{"quote":"I've always sort of been at odds with radio programmers.","author":"Leon Russell"},{"quote":"For the longest time, computers have been associated with work. Mainframes were for the Army, government agencies, and then large companies. Workstations were for engineers and software programmers. PCs were initially for other white-collar jobs.","author":"Om Malik"},{"quote":"There are 2 to 3 million women programmers in the world. We need to see them more.","author":"Megan Smith"},{"quote":"LISP programmers know the value of everything and the cost of nothing.","author":"Alan Perlis"},{"quote":"Computer programmers, biotechnologists, environmental scientists, neuroscientists, nanotech engineers - all of these fields, and more, should have at least a course in ethics as part of their degree requirements.","author":"Jamais Cascio"},{"quote":"I find that creative streak I think often leads in programmers to be good predictors of where culture as a whole is going to go. And that is where I think I've tried over the years to in some ways use my customers as a filter or a predictor of where technology as a whole is going to go. Or where the world as a whole is going to go.","author":"Tim O'Reilly"},{"quote":"Making AI more sensitive to the full scope of human thought is no simple task. The solutions are likely to require insights derived from fields beyond computer science, which means programmers will have to learn to collaborate more often with experts in other domains.","author":"Fei-Fei Li"},{"quote":"My list of basic tools is a partial answer to the question about what has changed: Over the past few years, large numbers of programmers have come to depend on elaborate tools to interface code with systems facilities.","author":"Bjarne Stroustrup"},{"quote":"I'm a designer, but I rely on programmers to bring my ideas to life. By learning to code myself, I think I can make things easier for all of us. Similarly, I want to be able to build things on my own without having to bother a programmer.","author":"Jason Fried"},{"quote":"There's a popular saying that the Internet interprets censorship as damage and routes around it. Desire and innovation will trump policy, the argument goes, as clever programmers circumvent controls.","author":"Virginia Postrel"},{"quote":"Programmers are very creative people. And animators are problem solvers, just as programmers are.","author":"Ed Catmull"},{"quote":"Programmers have been wandering out and shooting a shotgun into the night sky and hoping they hit something, and I end up paying $150 for channels full of nothing I want to watch.","author":"Rick Smolan"},{"quote":"Real programmers can write assembly code in any language.","author":"Larry Wall"},{"quote":"Programmers can be lazy.","author":"Larry Wall"},{"quote":"When designers replaced the command line interface with the graphical user interface, billions of people who are not programmers could make use of computer technology.","author":"Howard Rheingold"},{"quote":"This is how many people become artists, musicians, writers, computer programmers, record-holding athletes, scientists... by spending time alone practicing what they love.","author":"Meg Cabot"},{"quote":"I try to make the songs as good as I can - the way I like it, you know? And I guess my taste sometimes happens to be what other people, particularly radio programmers, like too.","author":"Max Martin"},{"quote":"In the beginning, there were Real Programmers.","author":"Eric S. Raymond"},{"quote":"When are programmers happy? They're happy when they're not underutilized - when they're not bored - and also when they're not overburdened with inappropriate specifications or meaningless bureaucracies. In other words, programmers are happiest when they're working efficiently. This is a general preference in creative work.","author":"Eric S. Raymond"},{"quote":"Whether you're looking at manufacturing and the use of robotics or the knowledge industries, they need computer programmers.","author":"Asa Hutchinson"},{"quote":"The world of programmers is not going to change on its own.","author":"Ellen Ullman"},{"quote":"Programmers seem to be changing the world. It would be a relief, for them and for all of us, if they knew something about it.","author":"Ellen Ullman"},{"quote":"Our society expects that everyone should learn to write, even though very few become professional writers. Similarly, I think that everyone should learn how to program, even though very few will become professional programmers.","author":"Mitchel Resnick"},{"quote":"Advertising revenue available for all programmers, all broadcasters is not enough to create quality programming, and subscription revenues are very, very minimal which come to all programmers.","author":"Subhash Chandra"},{"quote":"In our daily lives as programmers, we process text strings a lot. So I tried to work hard on text processing, namely the string class and regular expressions. Regular expressions are built into the language and are very tuned up for use.","author":"Yukihiro Matsumoto"},{"quote":"In the space of three weeks, I met a fair bunch of the guys who were just starting those little programmers' co-ops, and everybody was talking about starting businesses.","author":"Esther Dyson"},{"quote":"Of course, it's hard to support full-time programmers, so we do get funds from a set of companies that are interested in the health of the Mozilla project and so are willing to support the people working for the Foundation as well.","author":"Mitchell Baker"},{"quote":"'On demand' is more than just a series of clicks on your still-too-complicated remote control. In fact, it is now the best way to describe what the cable industry - from programmers to content makers to distributors - imagine their world is. Services and content available to very demanding consumers, wherever, whenever, however.","author":"Kara Swisher"},{"quote":"My duty as a teacher is to train, educate future programmers.","author":"Niklaus Wirth"},{"quote":"By the dawn of the millennium, the hallways at Microsoft were no longer home to barefoot programmers in Hawaiian shirts working through nights and weekends toward a common goal of excellence; instead, life behind the thick corporate walls had become staid and brutish.","author":"Kurt Eichenwald"},{"quote":"The best programmers and internet entrepreneurs are in the Bay Area. Don't kid yourself about that, not even for a second.","author":"Jose Ferreira"},{"quote":"In my view, the fact that computers caught up to humans and completely dominate humans in chess and some other domains already, that says there's evidence that, yes, in principle, they can be better programmers than humans.","author":"Jaan Tallinn"},{"quote":"Programmers work in bursts of productivity. Then, they let the brain rest and get back into it. A lot about the office world is not a great fit for me.","author":"Marco Arment"},{"quote":"Programmers and marketing people know how to get into your subconscious - they spend millions of dollars researching colors, shapes, designs, symbols, that affect your preferences, and they can make you feel warm, trusting, like buying. They can manipulate you.","author":"Richard Hatch"},{"quote":"Magicians are typically introverted; they don't tend to work with others, but I work with software programmers, composers, designers, so it's a very diverse group and the result is always more interesting than something I could have done by myself.","author":"Marco Tempest"},{"quote":"You could summarize everything I did at Apple was making tools to empower creative people. 'QuickDraw' empowered all these other programmers to now be able to sling stuff on the screen. The 'Window Manager,' 'Event Manager,' and 'Menu Manager.' Those are things that I worked on that were empowering other people.","author":"Bill Atkinson"},{"quote":"There are no standards for computer programmers and no group to certify them.","author":"Dave Parnas"},{"quote":"The distance between the people who made the games and the people playing them wasn't that big. It was the spirit of independence. The programmers were a lot like you.","author":"Jeff Minter"},{"quote":"Sun's role in the grand scheme of development is to work on the runtime environment and the APIs. The tools we produce are much more for systems programmers, not enterprise developers.","author":"John Fowler"},{"quote":"Finding a technical cofounder would have been difficult for me. I was an English major and didn't know any computer programmers.","author":"Jessica Livingston"}]

const accessToken = require('./accessToken')

const quote = quotes[Math.floor(Math.random()*quotes.length)]

fetch(`https://graph.facebook.com/v3.1/me/feed?access_token=${accessToken}`, { 
	method: 'POST',
	body: `debug=all&format=json&message=${encodeURIComponent(quote.quote+"\n\n"+quote.author)}&method=post&pretty=0&suppress_http_code=1`
})

.then(x => x.json()).then( t => console.log(t))