<?php

namespace Modules\LeadEmails\Http\Requests;

use App\Http\Requests\Request;
use Illuminate\Validation\Rule;

/**
 * Class UpdateLeadEmailsRequest
 * @package Modules\LeadEmails\Http\Requests
 */
class UpdateLeadEmailsRequest extends Request
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function rules()
    {

        $id = $this->route()->parameter('leademail');

        $company = session()->get('currentCompany');

        return [
            'email' => [
                'max:255',
                'required',
                'email',
                Rule::unique('lead_email')->ignore($id)->where(function($query) use ($company){
                   $query->where('company_id','=',$company->id);
                   $query->whereNull('deleted_at');
                })
            ]
        ];
    }

}
