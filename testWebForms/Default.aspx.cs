using System;
using System.Web.UI;

namespace testWebForms
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Page_Init(object sender, EventArgs e)
        {
            //((TextBox)SendMailControl1.FindControl("textBox1")).Text = (string)Session["textBox1"];
            //((TextBox)SendMailControl1.FindControl("emailBox")).Text = (string)Session["emailBox"];
        }

        protected void Page_OnLoad(object sender, EventArgs e)
        {
            //Session["textBox1"] = ((TextBox)SendMailControl1.FindControl("textBox1")).Text;
            //Session["emailBox"] = ((TextBox)SendMailControl1.FindControl("emailBox")).Text;
        }
    }
}