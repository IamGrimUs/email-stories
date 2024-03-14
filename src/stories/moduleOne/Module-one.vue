<template>
  <!--Headlines, copy, cta-->
  <div class="one-col" style="width: 100%; max-width: 600px">
    <!--[if mso]><table align="center" role="presentation" width="100%"><tr><td style="padding:0;"><![endif]-->
    <div style="width: 85%; max-width: 508px; margin: 0 auto">
      <!--[if mso]><table align="center" role="presentation" width="85%"><tr><td style="padding:0px;"><![endif]-->
      <h2 style="text-align: center">{{ headline }}</h2>
      <h2 style="margin-top: 80px">{{ headline }}</h2>
      <h2 style="margin-top: 80px">{{ headline }}</h2>
      <p style="margin-top: 10px" class="t24">{{ bodyCopy1 }}</p>
      <p style="margin-top: 80px; text-align: center">{{ bodyCopy2 }}</p>
      <p style="margin-top: 40px; text-align: center">
        <a
          href="https://shawscott.com"
          style="
            text-decoration: none;
            padding: 12px 30px;
            color: #000c02;
            display: inline-block;
            border-radius: 4px;
            mso-padding-alt: 0;
            text-underline-color: #000c02;
          "
          v-bind:style="{ 'background-color': backgroundColor }"
          class="btnPrim1"
        >
          <!--[if mso]><i style="mso-font-width:200%;mso-text-raise:120%" hidden>&#8195;</i><span style="mso-text-raise:65%;"><!
          [endif]-->{{ ctaCopy
          }}}}<!--[if mso]></span><i style="mso-font-width:200%;" hidden>&#8195;&#8203;</i><![endif]-->
        </a>
      </p>
      <!--[if mso]></td></tr></table><![endif]-->
    </div>
    <!--[if mso]></td></tr></table><![endif]-->
  </div>
  <!--/Headlines, copy, cta -->
</template>

<script>
export default {
  name: 'headlinesCopyCta',

  props: {
    headline: {
      type: String,
      required: true
    },
    bodyCopy1: {
      type: String
    },
    bodyCopy2: {
      type: String
    },
    ctaCopy: {
      type: String
    },
    color: {
      type: String
    },
    backgroundColor: {
      type: String
    }
  }
}
</script>
