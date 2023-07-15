<template>
  <div class="creative-portfolio">
    <div class="navbar row justify-between q-mx-xl q-my-none">
      <q-img
        class="navbar-logo q-my-md"
        src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.15752-9/315292169_1151540545459527_6742345507699360817_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wPR035a2mToAX9TmSQA&_nc_ht=scontent.fmnl4-4.fna&oh=03_AdTlvQ8iJ4gwSI1k0ierjnyGnY59GHCqUksNpUae8tujMA&oe=64DA0CAA"
      />

      <div class="flex flex-center">
        <div v-for="(navbtns, index) in navbtns" :key="index" class="q-mx-sm">
          <q-btn dense no-caps flat no-ripple class="btn-navbar q-pa-xs">
            {{ navbtns }}
          </q-btn>
        </div>
      </div>
    </div>
    <section>
      <div class="flex justify-between q-pt-lg">
        <div class="sec-1 q-mx-auto column justify-center">
          <h1 class="intro-header text-weight-bold q-my-sm">
            Joshua Yves Edellon
          </h1>
          <h2 class="intro-header q-my-none">Creative Portfolio</h2>
        </div>
        <div class="q-mx-auto">
          <q-img
            class="intro-image"
            src="https://scontent.fmnl9-4.fna.fbcdn.net/v/t1.15752-9/358807772_6751399491585320_3706198205310058807_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEgsqX2MiXesMK2XL1wXecDYcbyyhN7TZZhxvLKE3tNlnBBrmjhtbB6yXPOIE4Rvq4ehrwDm2EcW6tthiwCMOHM&_nc_ohc=SP30u1FKbYoAX8YbD9m&_nc_ht=scontent.fmnl9-4.fna&oh=03_AdQ5_gFJwjjQ-KNzoBTvZNBYk0u0iCBEjmRg5cZQQwVfgg&oe=64D31A90"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="sec-2">
        <div>
          <h1 class="text-bold">Projects</h1>
        </div>
        <div class="flex flex-center">
          <q-card class="my-card q-mx-md">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-card-section>
              <div class="text-h6 text-bold">Game Store</div>
            </q-card-section>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
          </q-card>
          <q-card class="my-card q-mx-md">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-card-section>
              <div class="text-h6 text-bold">E-commerce</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
          </q-card>
          <q-card class="my-card q-mx-md">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />
            <q-card-section>
              <div class="text-h6"></div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section>
      <div class="sec-3">
        <div class="row justify-center">
          <div class="carousel-container col-4 q-pa-md q-mr-md">
            <q-carousel
              class="carousel-graphic"
              animated
              v-model="slide"
              navigation
              :autoplay="autoplay"
              arrows
              transition-prev="slide-right"
              transition-next="slide-left"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
            >
              <q-carousel-slide
                :name="1"
                img-src="https://scontent.fmnl9-4.fna.fbcdn.net/v/t1.15752-9/358911790_964530114751922_1216060958009602603_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGvKmKEtYreRKBpZkjjXUgVQbduP6Nq9UJBt24_o2r1QhgWLY5dTUoeBxozI9rNow1RH_bwjrFxZQq0I4B7-wE7&_nc_ohc=3X7TZY8HM6sAX9hm4pi&_nc_ht=scontent.fmnl9-4.fna&oh=03_AdSKKgvdYV3QFrg_BaYPLo0r3ZmZKed1yuOw8kB0ZvAzGA&oe=64D0DA8A"
              />
              <q-carousel-slide
                :name="2"
                img-src="https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358531083_287283703874072_1641601649537094914_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFG9kjguEzd0d_KFb7sk3SSNy_8KZ7TNik3L_wpntM2KcF_Dz7EORddv2RdB5KuqKcEmj_GuN04EWWKdk3ddVKh&_nc_ohc=9_fFUOi6qgIAX-heyJB&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQUtTt6YbDWqtM4z-zQ5uBTQaFBzsN_o4CMwD2sTt0vng&oe=64D0D100"
              />
              <q-carousel-slide
                :name="3"
                img-src="https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358861734_1062043038514839_2781219056881981687_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHJ3g-h1NtpiO8kJG4KpZ693ik0CF5MbfXeKTQIXkxt9XsnxtXw0db-4G7K34Wa3AJWwZf1tYEo8Oih8BA_isor&_nc_ohc=rw3OndEQMrYAX-3GYMf&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdSY18g4LTJfKetaltPOCmU6P7SOZLBVOelZOG6-lIWB3w&oe=64D0FAC5"
              />
            </q-carousel>
          </div>

          <div class="text-container col-4 q-ml-xl">
            <div>
              <h5 class="carousel-header text-center">
                graphic design highlights
              </h5>
            </div>
            <div class="q-mx-sm">
              <p class="content-text text-justify">{{ getSlideText() }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="sec-4">
        <h1>ni</h1>
      </div>
    </section>
    <section>
      <div class="sec-4">
        <h1>Gido</h1>
      </div>
    </section>
  </div>
</template>
<script src="./script/portfolio"></script>

<style lang="scss">
@import "./style/portfolio.scss";
</style>
