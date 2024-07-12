import  "./ContactFormStyles.css";

function ContactForm(){
    return(
<div className="from-container" >
    <h1>Send a message to us! </h1>
    <form>
   <input placeholder="Name"></input>
   <input placeholder="Phone Number"></input>
   <input placeholder="Email"></input>
   <input placeholder="Choose Location"></input>
   <textarea placeholder="Message" rows="4"></textarea>
   <input placeholder="Any Query"></input>
   <input placeholder="FeedBack"></input>
   <button>Send Message</button>
   </form>
</div>

    )
}
export default ContactForm;