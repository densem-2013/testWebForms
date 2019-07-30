<%@ Page Title="EmailSendedSuccess" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="EmailSendedSuccess.aspx.cs" Inherits="testWebForms.EmailSendedSuccess" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div>
        <h3>Email was sended successfully.</h3>
    </div>
    <div>
        <p>Your email was successfully sended to <%=Session["emailBox"] %></p>
    </div>
</asp:Content>
