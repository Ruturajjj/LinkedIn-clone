import { transporter, sender } from "../lib/nodemailer.js";
import { createWelcomeEmailTemplate,createConnectionAcceptedEmailTemplate,
  createCommentNotificationEmailTemplate} from "./emailTemplate.js";

export const sendWelcomeEmail = async (email, name, profileUrl) => {
  if (!email) {
    console.error("No email provided to sendWelcomeEmail.");
    return;
  }

  // ✅ DEBUG: Show transporter config
  console.log("👉 Nodemailer transporter config:", transporter.options);

  try {
    const response = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Welcome to LinkedIn",
      html: createWelcomeEmailTemplate(name, profileUrl),
    });

    console.log("✅ Welcome email sent successfully:", response);
  } catch (error) {
    console.error("❌ Error sending welcome email:", error);
    throw error;
  }
};

export const sendCommentNotificationEmail = async (
  recipientEmail,
  recipientName,
  commenterName,
  postUrl,
  commentContent
) => {
  try {
    const info = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`, // Or use same sender as welcome email
      to: recipientEmail,
      subject: "New Comment on Your Post",
      html: createCommentNotificationEmailTemplate(
        recipientName,
        commenterName,
        postUrl,
        commentContent
      ),
    });

    console.log("Comment Notification Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending comment notification email:", error);
    throw error;
  }
};

export const sendConnectionAcceptedEmail = async (
  senderEmail,
  senderName,
  recipientName,
  profileUrl
) => {
  const mailOptions = {
    from: `"${senderName}" <${senderEmail}>`, // sender info
    to: senderEmail, // the recipient email
    subject: `${recipientName} accepted your connection request`,
    html: createConnectionAcceptedEmailTemplate(senderName, recipientName, profileUrl),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Connection accepted email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending connection accepted email:", error);
  }
};
