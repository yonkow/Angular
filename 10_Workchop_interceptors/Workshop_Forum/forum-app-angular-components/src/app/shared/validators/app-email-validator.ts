import { ValidatorFn } from "@angular/forms";

// export const appEmailValidator : ValidatorFn = (control) => {
//     return /^[^@]{6,}@gmail\.(com|bg)$/g
// }

export function appEmailValidator(domains: string[]): ValidatorFn{
    const domainString = domains.join('|')
    const re = new RegExp(`^[^@]{6,}@gmail\.(${domainString})$`)
    return (control) => {
        return (control.value === '' || re.test(control.value)) ? null : {appEmailValidator: true}
    }
}