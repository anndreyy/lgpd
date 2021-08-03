<template>
    <header>
        <nav class="hack menu">

            <div class="logo">
                <img src="@/assets/logo.png" alt="Logo">
            </div>
            <!-- <ul class="links">
                <li class="" onclick="openSubMenu('camping')">
                    Option A
                </li>
                <li class="" onclick="openSubMenu('working')">
                    Option B
                </li>
            </ul> -->
        </nav>   
        
    </header>

</template>
<script>
export default {
    name: "Navbar"
}
</script>
<style lang="scss">

// ------------------------------------------------------------------------
//  CORES DISPONIVEIS
// ------------------------------------------------------------------------
$bg-menu : rgb(0, 119, 255);
$color-links : rgb(255, 255, 255);
$color-link-hover : rgb(28, 74, 134);
$color-link-active : white;
$color-link-bg-active: rgb(32, 90, 165);
$color-submenu-bg: rgb(231, 241, 255);



// ------------------------------------------------------------------------
//  SECAO PLACEHOLDERS
// ------------------------------------------------------------------------
%box-shadow-01{
    -webkit-box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.38);
    -moz-box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.38);
    box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.38);
}

%box-shadow-02{
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.38);
    -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.38);
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.38);
}

%box-shadow-03{
    -webkit-box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.38);
    -moz-box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.38);
    box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.38);
}

%box-shadow-04{
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.38);
    -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.38);
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.38);
}

%box-shadow-05{
    -webkit-box-shadow: 0px 5px 4px 0px rgba(0,0,0,0.38);
    -moz-box-shadow: 0px 5px 4px 0px rgba(0,0,0,0.38);
    box-shadow: 0px 5px 4px 0px rgba(0,0,0,0.38);
}



// ------------------------------------------------------------------------
//  SECAO MENU
// ------------------------------------------------------------------------
.menu {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    top: 0;
    width: 100%;
    height: 90px;
    align-content: center;
    background-color: #171f2c;
    z-index: 1000;
    // @extend %box-shadow-02;

    &__branding {
        display: inline-flex;
        align-items: center;
        margin: 0 30px;

        >.icone {
            position: relative;
            width: 40px;
            height: 40px;
            background-position: 50% !important;
            color: white;
        }
    }

    &>.links {
        display: inline-flex;
        list-style: none;
        align-items: center;
        align-self: stretch;

        >li {
            display: inline-block;
            padding: 23px 66px;
            color: $color-links;

            &:hover {
                background-color: $color-link-hover;
                border-radius: 4px 4px 0 0;
            }
        }

        .active {
            background-color: $color-link-bg-active;
            border-radius: 4px 4px 0 0;
        }
    }
}

@media only screen and (max-width: 600px) {
  .menu > .links > li {
    padding: 5px;
  }
}



</style>