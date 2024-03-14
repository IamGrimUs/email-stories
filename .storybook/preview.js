import '../src/assets/styles/main.css'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `<div><story></div>`
      // template:`<div role="article" aria-roledescription="email" aria-label="email-name" lang="en" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;" align="center" class="body-bg">
      //   <table role="presentation" style="width:100%;border:0;border-spacing:0;border:10px solid">
      //     <tr>
      //       <td align="center">
      //         <!--[if mso]><table role="presentation" align="center" style="background-color:#fdfeff;width:600px;"><tr><td align="center"><![endif]-->
      //         <div class="bg-dark" style="background-color:#fdfeff;width:100%;max-width:600px;margin:0 auto;" >
      //           <story />
      //         </div>
      //         <!--[if mso]></td></tr></table><![endif]-->
      //       </td>
      //     </tr>
      //   </table>
      // </div>`
    })
  ]
}

export default preview
