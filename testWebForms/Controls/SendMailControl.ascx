<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="SendMailControl.ascx.cs" Inherits="testWebForms.Controls.SendMailControl" %>
<asp:Panel  runat="server" ID="panel1" HorizontalAlign="Center" >
                        
            <div class="row inlineRow">
                <div class="col-md-8" style="display:inline-flex">                    
                <asp:Label ID="emailLabel" runat="server" Text="<%$ Resources:Resource1, emailLabelText %>" ></asp:Label>
                <asp:TextBox ID="emailBox" runat="server" placeholder="type email here" CssClass="form-control"></asp:TextBox>
                </div>
                <div class="col-md-4" style="text-align: left;">                    
                     <asp:RequiredFieldValidator ID="emailRequired"  runat="server" ErrorMessage="<%$ Resources:Resource1, emailFieldRequiredMessage %>" ControlToValidate="emailBox"  CssClass="validMessage">
                      </asp:RequiredFieldValidator>
                    <asp:RegularExpressionValidator ID="remail" runat="server" 
                       ControlToValidate="emailBox" ErrorMessage="<%$ Resources:Resource1, remailValidatorErrorMessage %>" 
                       ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" CssClass="validMessage">
                    </asp:RegularExpressionValidator>
                </div>
            </div>
            <div class="row  inlineRow">                
                <div class ="col-md-12">
                    <asp:TextBox ID="textBox1" runat="server" Rows="10" TextMode="MultiLine" placeholder="Leave a message here" >
                    </asp:TextBox>
                    
                 <asp:RequiredFieldValidator ID="RequiredFieldValidator2"  runat="server" ErrorMessage="<%$ Resources:Resource1, bodyFieldRequiredMessage %>" ControlToValidate="textBox1"  CssClass="validMessage">
                  </asp:RequiredFieldValidator>
                </div>
                <div class ="col-md-2">
                </div>
            </div>
            <div class="row  inlineRow">
                <div class="col-md-8"></div>
                <div class="col-md-4">
                    <asp:Button ID="ButtonSend" runat="server" OnClick="ButtonSend_Click" Text="Send" CssClass="sendButton btn btn-info" />
                </div>
            </div>
    </asp:Panel>
