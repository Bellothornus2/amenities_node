const request = require('supertest');
const app = require('../app');

describe('Sample Test',() =>{
    it('should test that true === true', () =>{
        expect(true).toBe(true);
    })
});

describe('Changing Amenities', () =>{
    it('should change the price', async() => {
        const res = await request(app)
        .post('amenity/getAmenityByIdAndUpdate/61daf57354e4911c13494ce0')
        .send({
            price:25
        })
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('post')
        expect(response.body._id).toBe("61daf57354e4911c13494ce0");
        expect(response.body.price).toBe(25)
    })
})