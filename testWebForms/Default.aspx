<%@ Page Title="SendEmailTest" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="testWebForms._Default" EnableViewState="true" EnableViewStateMac="true"%>

<%@ Register src="Controls/SendMailControl.ascx" tagname="SendMailControl" tagprefix="uc1" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div class="row">        
         <uc1:SendMailControl ID="SendMailControl1" runat="server" />
    </div>
</asp:Content>
