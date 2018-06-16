var quotes = [
'You cannot have everything. Where would you put it? -Steven Wright',
'The road to success is dotted with many tempting parking spaces. -Will Rogers',
'The sun, with all those planets revolving around it and dependent upon it, can still ripen a bunch of grapes as if it had nothing else in the universe to do. -Galileo Galilei',
'I find television very educational. Every time someone turns it on, I go in the other room and read a book. –Groucho Marx',
'We do not stop playing because we grow old; we grow old because we stop playing. –George Bernard Shaw',
'Age is of no importance unless you are a cheese. –Billie Burke',
'Before enlightenment - chop wood, carry water. After enlightenment - chop wood, carry water. -Buddha',
'What is mind? No matter. What is matter? Never mind. -Zen quote, unknown',
'My admonition is this: be a Great Fool! A petty little fool is nothing but a worldling. But a Great Fool is a Buddha! -Shodo Harada',
'Once you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy. ―Albert Einstein',
'Nature abhores a vaccum, but not as much as cats do. -Anonymous'
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


