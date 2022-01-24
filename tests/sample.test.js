const request = require('supertest');
const { response } = require('../app');
const app = require('../app');

describe('Sample Test',() =>{
    it('should test that true === true', () =>{
        expect(true).toBe(true);
    })
});

describe('Changing Amenities', () =>{
    it('should change the price', async() => {
        const res = await request(app)
        .post('/amenity/getAmenityByIdAndUpdate/61daf57354e4911c13494ce0')
        .send({
            price:25
        })
        expect(res.statusCode).toEqual(302);
        expect(res.headers.location).toContain('/amenity/getAmenityById/61daf57354e4911c13494ce0')
    })
})

describe('Deleting Amenities', () => {
    it('should delete the Amenitiy', async() =>{
        const constructor = await request(app)
        .get('/amenity/factory/paquete de para eliminar/20/Hola/Soy la descripcion/true/false');
        const idObjeto = constructor.body._id;
        const res = await request(app)
        .delete('/amenity/getAmenityByIdAndDelete/'+idObjeto);
        const res2 = await request(app)
        .get('/amenity/getAmenityById/'+idObjeto);
        expect(res2.body).toBe(null);
    })
});
