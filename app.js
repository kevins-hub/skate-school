const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
//app.engine('handlebars', exphbs());
app.engine( "handlebars", exphbs({ extname: "handlebars", defaultLayout: false, layoutsDir: "views/" }) );
app.set('view engine', 'handlebars');

// Static folder

app.use('/public', express.static(path.join(__dirname, 'public')));


// Body Parser Middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.render('home');
});

app.get('/home', (req,res) => {
    res.render('home');
});

app.get('/lessons', (req,res) => {
    res.render('lessons');
});

app.get('/contact', (req,res) => {
    res.render('contact');
});

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/media', (req,res) => {
    res.render('media');
});

app.post('/send', (req,res) => {
   const output = `
   <p>You have a new form submission </p>
   <h3>Contact Details</h3>
   <ul>
        <li>Name: ${req.body.fname} ${req.body.lname}<li>
        <li>Email: ${req.body.email} </li>
        <li>Phone Number: ${req.body.number}</li>
        <li>Lesson Type: ${req.body.lesson}</li>
        <li>Message: ${req.body.message}</li>
    </ul>
   `

   async function main(){
            // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: "keepskatingskateschool@gmail.com", // generated ethereal user
            pass: "K3v1nl1uflip42892" // generated ethereal password
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Keep Skating Skate School" <keepskatingskateschool@gmail.com>', // sender address
            to: "kevinliu428@gmail.com", // list of receivers
            subject: "New Potential Skate Student", // Subject line
            text: "Hello world?", // plain text body
            html: output // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.render('home', {msg:'Email has been sent'});
   }

   main().catch(console.error);

});

app.listen(3000, () => console.log('Server started...'));