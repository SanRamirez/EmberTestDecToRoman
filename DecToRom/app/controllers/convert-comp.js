import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        convert(){
            var n1 = this.get('txtN1');
            var decimas = Math.floor(n1/10);
            var unidades = n1 % 10;
            var dec = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'];
            var uni = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
            var str1;
            var str2;
            str1 = dec[decimas-1];
            switch(unidades) {
                case 0:
                    str2 ="";
                    break;
                default:
                    str2 = uni[unidades - 1];
            }
            var resul = str1+""+str2;
            this.set('resultado', resul);
        }    
    }


});
