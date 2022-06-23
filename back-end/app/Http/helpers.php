<?php

declare(strict_types = 1);

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;

/**
 * @param array $errors
 * @param int $code
 *
 * @return JsonResponse
 */
function getErrorsResponse($errors = [], int $code = 400): JsonResponse
{
    return Response::json(['errors' => $errors], $code);
}

/**
 * @param array $data
 * @param int $code
 *
 * @return JsonResponse
 */
function getSuccessResponse(array $data = ['success' => true], $code = 200): JsonResponse
{
    return Response::json($data, $code, []);
}
