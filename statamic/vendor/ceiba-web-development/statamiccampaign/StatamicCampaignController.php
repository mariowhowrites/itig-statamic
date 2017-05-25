<?php

namespace Statamic\Addons\StatamicCampaign;

use Statamic\Extend\Controller;

class StatamicCampaignController extends Controller
{
    /**
     * Maps to your route definition in routes.yaml
     *
     * @return Illuminate\Http\Response
     */
    public function index()
    {
        return $this->view('index');
    }
}
