# azure-functions
This repository contains a collection of Azure Functions that can be used to automate common enterprise tasks such as sending emails, creating Excel and CSV documents, and queuing emails to be sent by the Send Email Queue Processor. These functions are designed to be easily integrated into existing workflows and can help you streamline your business processes.

This repository contains a collection of Azure Functions written in TypeScript and running via Node. These functions can be used to automate common enterprise tasks such as sending emails, creating Excel and CSV documents, and queuing emails to be sent by the Send Email Queue Processor. They are designed to be easily integrated into existing workflows and can help you streamline your business processes.

To test these functions locally, you will need to install the Azure Functions Core Tools, which can be downloaded from the official Azure Functions documentation website. These tools allow you to test and debug Azure Functions on your local development machine.
https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local


Some of the key features of this repository include:

- Email Sender Function: This function can be used to send emails using SMTP, enabling you to easily send notifications and alerts to users.
- Excel Creator Function: This function allows you to generate Excel documents with customizable formatting and data. You can easily integrate this function into your data processing workflows.
- CSV Creator Function: This function allows you to generate CSV documents with custom delimiter and formatting options, making it easy to export data from your applications.
- Email Queue Function: This function can be used to add incoming email messages to an Azure Queue, enabling you to process them asynchronously using the Send Email Queue Processor.


