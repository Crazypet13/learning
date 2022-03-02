let gimmi='kérek'

 class szesz{
    sör = (elem) => elem+' sört';
    bor = (elem) => {
        let sör = (elem) => elem+' pálinka';
       return elem+' bort'
    };
};
let bolt = new szesz()


console.log(bolt.sör(gimmi))
