<template>
    <section id="Headline">

        <div class="header" v-scroll-reveal.reset>
          <h1>
            LGPD - GRPD
          </h1>          
        </div>

        <div class="wrapper">

          <div class="headerLogo" v-scroll-reveal.reset>
            <img src="@/assets/security_icon.png" alt="">
          </div>  

          <div class="subline" v-scroll-reveal.reset>
            
            <h2 >
                Acompanhe a evolução da LGPD e GDPR pelo mundo com o apoio do radar <b>DPO - More IT</b><br />
                <span class="subtitle">Objetivo do portal é apoiar os DPO's em seu dia a dia. Todos os dados são coletados do GDPR Enforcement Tracker e Portal de Violações ANPPD</span>
            </h2> 
          </div>

             

        </div>

       

    </section>
</template>
<script>


export default {
    name: "Headline",
    components: {
        
    },
    data: () => ({
  }),
}
</script>
<style lang="scss">
  .flex{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
  }
  .cardNumber{
    text-align: center;
    span.title{
      font-size: 1.5em;
    }
  }
</style>