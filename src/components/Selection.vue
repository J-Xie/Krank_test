<template>
  <div class="select">
    <ul>
      <li v-for="person in persons">
        <a href="#">
          <div :class="['single_person', 'flex', person.price ? '' : 'black_background']">
	    <div class="date_time line-height-0-7">
	      <p class="time">{{person.time}}</p>
	      <p class="date">{{person.date}}</p>
	      <v-icon medium>grade</v-icon>
            </div>
	    <div class="info line-height-0-7">
	      <p class="place">{{person.place}}</p>
	      <div class="party_info">
	        <ul>
		  <li class="tags" v-for="tag in person.tags">
		    {{tag.first}} {{tag.second}} {{tag.third}}
		  </li>
	        </ul>
                <div class="flex space_btw">
  	          <div>
    	            <p>{{person.name}}</p>
	            <p v-if="person.price">{{person.price}} - {{person.playtime}}</p>
                    <p v-else>COMPLET</p>
   	          </div>
	          <p><img src="./../assets/avatar.png" alt="avatar" /></p>
  	        </div>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      persons: [
        {
          name: 'Benoît de Krank',
          tags: [
            {
              first: '#5vs5',
              second: '#Expert',
              third: '#BonEsprit'
            }
          ],
          place: 'Urban Soccer Aubervilliers',
          date: 'Mar.11',
          time: '17h30',
          price: '8€',
          playtime: '1h30'
        },
        {
          name: 'Bouiss Nait',
          tags: [
            {
              first: '#3vs3',
              second: '#Expert',
              third: '#BonEsprit'
            }
          ],
          place: 'Le Five bezon',
          date: 'Mar.11',
          time: '18h',
          price: '',
          playtime: ''
        },
        {
          name: 'Solange Benaudet',
          tags: [
            {
              first: '#5vs5',
              second: '#Débutant',
              third: '#BonEsprit'
            }
          ],
          place: 'Hoops Factory Paris',
          date: 'Mar.11',
          time: '19h',
          price: '8€',
          playtime: '1h30'
        },
        {
          name: 'Une personne',
          tags: [
            {
              first: '#7vs7',
              second: '#Senior',
              third: '#BonEsprit'
            }
          ],
          place: 'Cours Niox',
          date: 'Mar.11',
          time: '20h30',
          price: '6€',
          playtime: '1h'
        },
        {
          name: 'Une deuxième personne',
          tags: [
            {
              first: '#5vs5',
              second: '#Expert',
              third: '#BonEsprit'
            }
          ],
          place: 'Suzanne Lenglen',
          date: 'Mar.12',
          time: '19h30',
          price: '',
          playtime: ''
        }
      ]
    }
  },
  name: 'selection'
}
</script>

<style>
.select {
  margin-top: -3vw;
  width: 100%;
  max-height: 108vw;
}
.single_person {
  height: calc(100% - 237);
  overflow-y: scroll;
  padding: 10px;
}
div.black_background .date_time {
  background-color: #6C6C6C;
}
div.black_background .place {
  color: #6C6C6C;
}
.date_time {
  z-index: 5;
  border: 1px solid light-green;
  border-radius: 45px;
  width: 25%;
  font-weight: bold;
  color: #fff;
  background-color: #00cc66;
}
.time {
  font-size: 60px;
}
.date {
  font-size: 50px;
}
.place {
  font-weight: bold;
  font-size: 50px;
  color: #00cc66;
}
.tags {
  color: #B0B0B0;
}
.info {
  z-index: 2;
  margin-left: -15px;
  padding-left: 40px;
  background-color: #F7F7F7;
  width: 75%;
  text-align: left;
  border: 1px solid #F7F7F7;
  border-radius: 0 45px 45px 0;
}
.party_info {
  font-size: 40px;
  padding-left: 15px;
  padding-right: 25px;
}
.space_btw {
  justify-content: space-between;
}
</style>