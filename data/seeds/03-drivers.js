exports.seed = function(knex) {
  return knex("drivers").insert([
    
    //These are Safe Mothers actual drivers. Please do not erase!!!!!
    //***WARNING***: For Lambda Labs Teams testing the SMS system, please change and save the below phone numbers. These are actual working phone numbers in Uganda.
    {
      driver_name: "Drazen Belieff",
      latitude: "1.8254328",
      longitude: "50.4547664",
      phone: "+699699695",
      availability: true,
      reliability: 4,
      online:true
    },
    {
      driver_name: "Nviiri Brian",
      latitude: "0.7954328",
      longitude: "33.4547664",
      phone: "+16058525485",
      availability: true,
      reliability: 4,
      online:true
    },
    {
      driver_name: "Kalende Yasin",
      latitude: "0.8607573",
      longitude: "32.4388595",
      phone: "+16055217234",
      availability: true,
      reliability: 5,
      online:false
    },
    {
      driver_name: "Izimba Jowari",
      latitude: "-1.847919",
      longitude: "30.905961",
      phone: "+25678327095",
      availability: true,
      reliability: 5,
      online:true
    },
    {
      driver_name: "Muduuli Aminsi",
      latitude: "0.9607573",
      longitude: "35.4388595",
      phone: "+25678965912",
      availability: true,
      reliability: 5,
      online:true
    },
    {
      driver_name: "Zijjakyiro Bakali",
      latitude: "0.8407573",
      longitude: "32.4388595",
      phone: "+256783269299",
      availability: true,
      reliability: 5,
      online:false
    },
    {
      driver_name: "TJ Bakali",
      latitude: "0.8607573",
      longitude: "33.4388595",
      phone: "+256750684130",
      availability: true,
      reliability: 5,
      online:true
    },
    {
      driver_name: "Mugeere Erifazi",
      latitude: "0.8254328",
      longitude: "34.524547664",
      phone: "+16084670303",
      availability: true,
      reliability: 5,
      online:true
    },
    {
      driver_name: "Dembe Erifazi",
      latitude: "-0.847919",
      longitude: "30.905961",
      phone: "+699699679699",
      availability: true,
      reliability: 5,
      online:true
    },

  ]);
};
