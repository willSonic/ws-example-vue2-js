


export default {
   name:'StyleSelector',
   data:()=> {
      return {
         radioSex: '',
         pantsSelection: '',
         colorSelection:'',
         searchDisabled:true
      }
    },

    methods: {
      onClothingTypeSelection(){
         this.searchDisabled = false;
      },
      searchRequest() {
         if (!this.searchDisabled) {
            console.log('searchRequest radioSex =', this.radioSex);
            console.log('searchRequest pantsSelection =', this.pantsSelection);
            let request='';
            [this.radioSex,
             this.colorSelection,
             this.pantsSelection].
                   forEach((item)=>{
                                   if(request && item ){
                                      request=request +'+'+item;
                                   }else if(item){
                                       request=item;
                                   }
                                  });


            console.log('searchRequest request =', request);
            this.$store
              .dispatch("GarmentCollection/fetchGarmentCollection", {
                selection: request,
                page: 1
              })
              .then(() => {
                this.$router.push({
                  path: "stylecollection",
                  query: { selection: request, page: 1 }
                });
             });
         }
      }
    }
};