<template>
  <v-ons-page>
    <v-ons-list>
      <v-ons-list-item
        v-for="curr in myEvents"
        :key="curr.id"
        @click="push(curr.id)"
      >
        <div class="left">
          <img class="list-item__thumbnail" :src="firstPhoto(curr)" />
        </div>
        <div class="center">
          <span class="list-item__subtitle">
            <strong>{{ curr.user }} </strong>
            <span>{{ curr.action }}</span>
          </span>
          <span class="list-item__subtitle">{{ curr.timeStr }}</span>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
import { mapState } from 'vuex'
import { noImagePlaceholderUrl } from '@/misc/constants'

export default {
  computed: {
    ...mapState('activity', ['myEvents']),
  },
  created() {
    this.$store.dispatch('activity/getMyEvents')
  },
  methods: {
    push(eventId) {
      // FIXME implement this
      // this.$store.commit('obs/setSelectedObservationId', obsId)
      // this.$store.commit('navigator/push', ObsDetailComponent)
      this.$ons.notification.alert('FIXME - implement this')
      console.debug(eventId)
    },
    isPhoto(record) {
      return record && record.photoUrl
    },
    firstPhoto(record) {
      if (!this.isPhoto(record)) {
        return noImagePlaceholderUrl
      }
      return record.photoUrl
    },
  },
}
</script>
