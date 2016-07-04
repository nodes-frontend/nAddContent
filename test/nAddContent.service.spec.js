'use strict';

describe('NAddContentService', () => {

	let NAddContentService;

	const UUIDRegExp 				= new RegExp(/[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}/);
	const templateRequiredError 	= 'Template is required!!!';
	const UUIDRequiredError 		= 'UUID is required!!!';
	const UUIDNotFoundError 		= 'UUID was not found!!!';
	const itemRequiredError 		= 'Item is required!!!';
	const itemTemplateRequiredError = 'Item template is required!!!';
	const itemUUIDRequiredError 	= 'Item uuid is required!!!';

	beforeEach(() => {
		angular.module('templates', []);
		module('nAddContent');
		module(($exceptionHandlerProvider) => {
			$exceptionHandlerProvider.mode('log');
		});
	});

	beforeEach(inject((_NAddContentService_) => {
		NAddContentService = _NAddContentService_;
	}));

	it('Should create and return item Object', () => {
		const actual = NAddContentService.create('template.html');

		expect(actual.uuid).toMatch(UUIDRegExp);
		expect(actual.template).toEqual('template.html');
	});

	it('Should throw error if "template" is not provided for create method', () => {
		const actual = NAddContentService.create;
		expect(actual).toThrow(templateRequiredError);
	});

	it('Should add item and return items', () => {

		const item 		= NAddContentService.create('template.html');

		const actual 	= NAddContentService.add(item);
		const expected 	= [item];

		expect(actual).toEqual(expected);
	});

	it('Should throw error if "item" is not provided for add method', () => {
		const actual = NAddContentService.add;
		expect(actual).toThrow(itemRequiredError);
	});

	it('Should throw error if "item.template" is not provided for add method', () => {
		expect( () => NAddContentService.add({}) ).toThrow(itemTemplateRequiredError);
	});

	it('Should throw error if "item.uuid" is not provided for add method', () => {
		const item = {template: 'template.html'};
		expect( () => NAddContentService.add(item) ).toThrow(itemUUIDRequiredError);
	});

	it('Should return items', () => {
		const actual 	= NAddContentService.items;
		const expected 	= [];

		expect(actual).toEqual(expected);
	});

	it('Should return item with specified uuid', () => {
		const itemOne	= NAddContentService.create('templateOne.html');
		const itemTwo 	= NAddContentService.create('templateTwo.html');
		const itemThree = NAddContentService.create('templateThree.html');

		NAddContentService.add(itemOne);
		NAddContentService.add(itemTwo);
		NAddContentService.add(itemThree);

		const actual = NAddContentService.getByUUID(itemTwo.uuid);

		expect(actual).toEqual(itemTwo);
	});

	it('Should throw error if "uuid" is not provided for getByUUID method', () => {
		expect( () => NAddContentService.getByUUID() ).toThrow(UUIDRequiredError);
	});

	it('Should throw error if item is not found by getByUUID', () => {
		expect( () => NAddContentService.getByUUID('DOES_NOT_EXIST') ).toThrow(UUIDNotFoundError);
	});

	it('Should remove item by uuid, and return removed item', () => {
		const itemOne	= NAddContentService.create('templateOne.html');
		const itemTwo 	= NAddContentService.create('templateTwo.html');
		const itemThree = NAddContentService.create('templateThree.html');

		NAddContentService.add(itemOne);
		NAddContentService.add(itemTwo);
		NAddContentService.add(itemThree);

		const actual = NAddContentService.removeByUUID(itemTwo.uuid);

		expect(NAddContentService.items.length).toBe(2);
		expect(actual).toEqual(itemTwo);
	});

	it('Should throw error if "uuid" is not provided for removeByUUID method', () => {
		expect( () => NAddContentService.removeByUUID() ).toThrow(UUIDRequiredError);
	});

	it('Should remove all items', () => {
		expect( NAddContentService.reset() ).toBeTruthy();
		expect(NAddContentService.items.length).toBe(0);
	});

});
