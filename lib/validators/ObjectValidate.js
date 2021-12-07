"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectValidate = void 0;
const ObjectValidate = (data) => {
    const props = Object.keys(data);
    props.forEach((p) => {
        if (data[p].required && !data[p].value) {
            throw new Error(`Validation error, '${p}' is required.`);
        }
    });
    return true;
};
exports.ObjectValidate = ObjectValidate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0VmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmFsaWRhdG9ycy9PYmplY3RWYWxpZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFZTyxNQUFNLGNBQWMsR0FBRyxDQUFDLElBQTJCLEVBQVcsRUFBRTtJQUNuRSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNoQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUM1RDtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBVFcsUUFBQSxjQUFjLGtCQVN6QiJ9