using System;
using System.Net.Mail;
using System.Text;

namespace testWebForms.Controls
{
    public partial class SendMailControl : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var textBox1Value = Request.Cookies[textBox1.ClientID]?.Value;
            if (textBox1Value != null)
            {
                textBox1.Text = Encoding.UTF8.GetString(Convert.FromBase64String(textBox1Value));
            }
            var emailBoxValue = Request.Cookies[emailBox.ClientID]?.Value;
            if (emailBoxValue != null)
            {
                emailBox.Text = Encoding.UTF8.GetString(Convert.FromBase64String(emailBoxValue));
            }
        }

        protected override void OnUnload(EventArgs e)
        {
            base.OnUnload(e);
        }

        protected void ButtonSend_Click(object sender, EventArgs e)
        {
            if (Page.IsValid)
            {
                MailMessage mail = new MailMessage();
                mail.To.Add(emailBox.Text);

                mail.From = new MailAddress("mailtestsend17@gmail.com");
                mail.Subject = "Email using Gmail";

                string Body = textBox1.Text;
                mail.Body = Body;

                mail.IsBodyHtml = true;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Credentials = new System.Net.NetworkCredential
                     ("mailtestsend17@gmail.com", "123qwerty$");

                smtp.EnableSsl = true;
                smtp.Send(mail);

                Response.Redirect("~/EmailSendedSuccess");
            }

        }
    }
}