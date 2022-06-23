<?php

declare(strict_types=1);

namespace App\Http\Requests\Post;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrUpdatePostRequest extends FormRequest
{
    /**
     * @return array[][]
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:30'],
        ];
    }
}
